// API Configuration
// For development: Use localhost for simulator/emulator
// For physical device: Use your computer's IP address (e.g., http://192.168.1.XXX:3000/api)
export const API_BASE_URL = __DEV__ 
  ? 'http://192.168.1.82:3000/api'  // Your computer's IP for physical device testing
  : 'https://your-api-domain.com/api';  // Production URL

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
  },
  // Users
  USERS: {
    PROFILE: '/users/profile',
  },
  // Vehicles
  VEHICLES: {
    LIST: '/vehicles',
    DETAIL: (id: string) => `/vehicles/${id}`,
    CREATE: '/vehicles',
    UPDATE: (id: string) => `/vehicles/${id}`,
    DELETE: (id: string) => `/vehicles/${id}`,
    TOGGLE_AVAILABILITY: (id: string) => `/vehicles/${id}/availability`,
  },
  // Bookings
  BOOKINGS: {
    CREATE: '/bookings',
    LIST: '/bookings',
    DETAIL: (id: string) => `/bookings/${id}`,
    ACCEPT: (id: string) => `/bookings/${id}/accept`,
    REJECT: (id: string) => `/bookings/${id}/reject`,
    CANCEL: (id: string) => `/bookings/${id}/cancel`,
  },
  // Trips
  TRIPS: {
    START: (bookingId: string) => `/trips/${bookingId}/start`,
    END: (id: string) => `/trips/${id}/end`,
    LIST: '/trips',
    DETAIL: (id: string) => `/trips/${id}`,
    UPDATE_LOCATION: (id: string) => `/trips/${id}/location`,
  },
};

