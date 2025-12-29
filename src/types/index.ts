// User Types
export type UserType = 'driver' | 'rider';

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  userType: UserType;
  profilePicture?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Vehicle Types
export interface Vehicle {
  id: string;
  driverId: string;
  make: string;
  model: string;
  year: number;
  color: string;
  licensePlate: string;
  vehicleType: string;
  seats: number;
  fuelType: string;
  photos: string[];
  currentLatitude?: number;
  currentLongitude?: number;
  isAvailable: boolean;
  hourlyRate: number;
  dailyRate: number;
  createdAt: string;
  updatedAt: string;
  driver?: {
    user: {
      id: string;
      name: string;
      email: string;
      phone: string;
    };
  };
}

// Booking Types
export type BookingStatus = 'pending' | 'accepted' | 'rejected' | 'cancelled';

export interface Booking {
  id: string;
  riderId: string;
  vehicleId: string;
  pickupLocation: string;
  endLocation: string;
  date: string;
  time: string;
  duration: number;
  status: BookingStatus;
  totalPrice?: number;
  createdAt: string;
  updatedAt: string;
  vehicle?: Vehicle;
}

// Trip Types
export type TripStatus = 'in_progress' | 'completed' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'refunded';

export interface Trip {
  id: string;
  bookingId: string;
  startTime?: string;
  endTime?: string;
  distanceKm?: number;
  durationMinutes?: number;
  finalPrice?: number;
  paymentStatus: PaymentStatus;
  status: TripStatus;
  createdAt: string;
  updatedAt: string;
  booking?: Booking;
}

// Navigation Types
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Login: undefined;
  Register: { userType?: UserType };
  Home: undefined;
  Vehicles: undefined;
  VehicleDetail: { vehicleId: string };
  Bookings: undefined;
  BookingDetail: { bookingId: string };
  Trips: undefined;
  TripDetail: { tripId: string };
  Profile: undefined;
};

