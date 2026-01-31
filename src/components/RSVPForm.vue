<template>
  <section class="rsvp-section">
    <h2 class="section-title reveal">RSVP</h2>
    <p class="section-subtitle reveal">Kindly let us know if you can make it</p>

    <form class="rsvp-form reveal" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name" class="form-label">Full Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="form-input"
          placeholder="Enter your name"
          required
        />
      </div>

      <div class="form-group">
        <label for="phone" class="form-label">Phone Number</label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          class="form-input"
          placeholder="Enter your phone number"
        />
      </div>

      <div class="form-group">
        <label class="form-label">Will you attend?</label>
        <div class="radio-group">
          <label class="radio-label">
            <input
              type="radio"
              name="attendance"
              value="yes"
              v-model="form.attendance"
              class="radio-input"
            />
            <span class="radio-custom"></span>
            <span class="radio-text">Joyfully Accept</span>
          </label>
          <label class="radio-label">
            <input
              type="radio"
              name="attendance"
              value="no"
              v-model="form.attendance"
              class="radio-input"
            />
            <span class="radio-custom"></span>
            <span class="radio-text">Regretfully Decline</span>
          </label>
        </div>
      </div>

      <div class="form-group">
        <label for="guests" class="form-label">Number of Guests</label>
        <input
          type="number"
          id="guests"
          v-model="form.guests"
          class="form-input"
          placeholder="1"
          min="1"
          max="10"
        />
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Message for the Couple (Optional)</label>
        <textarea
          id="message"
          v-model="form.message"
          class="form-input form-textarea"
          placeholder="Share your wishes..."
          rows="3"
        ></textarea>
      </div>

      <button type="submit" class="submit-button" :disabled="isSubmitting">
        <Send :size="18" />
        <span>{{ isSubmitting ? 'Sending...' : 'Send RSVP' }}</span>
      </button>

      <p v-if="submitStatus === 'success'" class="status-message success">
        Thank you for your response!
      </p>
      <p v-if="submitStatus === 'error'" class="status-message error">
        Something went wrong. Please try again.
      </p>
    </form>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Send } from 'lucide-vue-next'

const form = reactive({
  name: '',
  phone: '',
  attendance: 'yes',
  guests: 1,
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  // Simulate form submission
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form submitted:', form)
    submitStatus.value = 'success'

    // Reset form
    form.name = ''
    form.phone = ''
    form.attendance = 'yes'
    form.guests = 1
    form.message = ''
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.rsvp-section {
  padding: 4rem 2rem;
  position: relative;
  z-index: 10;
}

.section-title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #5a4a5a;
  text-align: center;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #7a6a7a;
  text-align: center;
  margin-bottom: 2.5rem;
}

.rsvp-form {
  max-width: 500px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(90, 74, 90, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #5a4a5a;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.form-input {
  width: 100%;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(212, 165, 165, 0.5);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #5a4a5a;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-bottom-color: #d4a5a5;
}

.form-input::placeholder {
  color: #9a8a9a;
}

.form-textarea {
  resize: none;
  border: 1px solid rgba(212, 165, 165, 0.5);
  border-radius: 8px;
  padding: 0.75rem;
  margin-top: 0.25rem;
}

.form-textarea:focus {
  border-color: #d4a5a5;
}

.radio-group {
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.radio-input {
  display: none;
}

.radio-custom {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(212, 165, 165, 0.6);
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
}

.radio-input:checked + .radio-custom {
  border-color: #d4a5a5;
}

.radio-input:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: #d4a5a5;
  border-radius: 50%;
}

.radio-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #5a4a5a;
}

.submit-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, #d4a5a5 0%, #c9a0dc 100%);
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(212, 165, 165, 0.3);
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 165, 165, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: scale(0.98);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.status-message {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
}

.status-message.success {
  background: rgba(144, 238, 144, 0.2);
  color: #2e7d32;
}

.status-message.error {
  background: rgba(255, 99, 71, 0.2);
  color: #c62828;
}

@media (max-width: 768px) {
  .rsvp-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .rsvp-form {
    padding: 1.5rem;
  }

  .radio-group {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
