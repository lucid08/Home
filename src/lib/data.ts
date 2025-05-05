export let homeListings: {
    id: number;
    location: string;
    availableFrom: string;
    availableTo: string;
    description: string;
    price:number;
  }[] = [];
  
  export let bookings: {
    id: number;
    homeId: number;
    userId: number;
    fromDate: string;
    toDate: string;
  }[] = [];
  
  export let users: {
    id: number;
    username: string;
    password: string; 
  }[] = [];
  