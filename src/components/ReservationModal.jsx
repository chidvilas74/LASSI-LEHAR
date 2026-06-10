import { useEffect, useRef, useState } from 'react';

const FIELDS = [
  { name: 'name',    label: 'Full Name',         type: 'text',   placeholder: 'Your name',         required: true,  full: false },
  { name: 'phone',   label: 'Phone Number',       type: 'tel',    placeholder: '+91 XXXXX XXXXX',   required: true,  full: false },
  { name: 'date',    label: 'Preferred Date',     type: 'date',   placeholder: '',                  required: true,  full: false },
  { name: 'time',    label: 'Preferred Time',     type: 'time',   placeholder: '',                  required: true,  full: false },
  { name: 'guests',  label: 'Party Size',         type: 'select', placeholder: '',                  required: true,  full: false },
  { name: 'note',    label: 'Special Requests',   type: 'textarea',placeholder:'Allergies, occasion, seating preference…', required: false, full: true },
];

const GUEST_OPTIONS = ['1–2 Guests','3–4 Guests','5–6 Guests','7–10 Guests','10+ Guests (Private)'];

function validate(data) {
  const errors = {};
  if (!data.name?.trim()) errors.name = 'Please enter your name.';
  if (!data.phone?.trim() || !/^[+\d\s\-()]{7,15}$/.test(data.phone)) errors.phone = 'Please enter a valid phone number.';
  if (!data.date) errors.date = 'Please select a date.';
  if (!data.time) errors.time = 'Please select a time.';
  if (!data.guests) errors.guests = 'Please select party size.';
  return errors;
}

export default function ReservationModal({ open, onClose, onSuccess }) {
  const [data, setData] = useState({ name:'', phone:'', date:'', time:'', guests:'', note:'' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 350);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const set = (field, value) => {
    setData(d => ({ ...d, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(data);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setData({ name:'', phone:'', date:'', time:'', guests:'', note:'' });
    setErrors({});
    onSuccess('Reservation request received! We\'ll confirm shortly. ✓');
  };

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close reservation form">✕</button>

        <h2 className="modal-title" id="modal-title">Reserve a Table</h2>
        <p className="modal-subtitle">At Vijaya Circle, Sandur · We'll confirm within 2 hours</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {FIELDS.map((field, i) => (
              <div className={`form-group${field.full ? ' full' : ''}`} key={field.name}>
                <label className="form-label" htmlFor={`res-${field.name}`}>{field.label}</label>

                {field.type === 'select' ? (
                  <select
                    id={`res-${field.name}`}
                    className="form-select"
                    value={data[field.name]}
                    onChange={e => set(field.name, e.target.value)}
                    ref={i === 0 ? firstInputRef : null}
                  >
                    <option value="">Select party size</option>
                    {GUEST_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={`res-${field.name}`}
                    className="form-textarea"
                    placeholder={field.placeholder}
                    value={data[field.name]}
                    onChange={e => set(field.name, e.target.value)}
                  />
                ) : (
                  <input
                    id={`res-${field.name}`}
                    className="form-input"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={data[field.name]}
                    onChange={e => set(field.name, e.target.value)}
                    required={field.required}
                    ref={i === 0 ? firstInputRef : null}
                  />
                )}
                {errors[field.name] && (
                  <span className="form-error" role="alert">{errors[field.name]}</span>
                )}
              </div>
            ))}
          </div>

          <button className="form-submit" type="submit" disabled={submitting}>
            {submitting ? 'Sending Reservation…' : 'Confirm Reservation →'}
          </button>
        </form>
      </div>
    </div>
  );
}
