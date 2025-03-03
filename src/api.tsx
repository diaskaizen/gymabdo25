import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Type definitions (optional, but recommended for TypeScript)
interface Member {
    id: number;
    name: string;
    email: string;
    // Add other member properties here
}

interface Payment {
    id: number;
    amount: number;
    date: string;
    status: string;
    // Add other payment properties here
}

interface Attendance {
    id: number;
    member: Member;
    date: string;
    status: string;
    // Add other attendance properties here
}

// Fetch all members
export const getMembers = async (): Promise<Member[]> => {
    try {
        const response = await api.get("members/");
        return response.data;
    } catch (error) {
        console.error("Error fetching members:", error);
        throw error; // Or handle error as needed
    }
};

// Fetch all payments
export const getPayments = async (): Promise<Payment[]> => {
    try {
        const response = await api.get("payments/");
        return response.data;
    } catch (error) {
        console.error("Error fetching payments:", error);
        throw error; // Or handle error as needed
    }
};

// Fetch all attendance records
export const getAttendance = async (): Promise<Attendance[]> => {
    try {
        const response = await api.get("attendance/");
        return response.data;
    } catch (error) {
        console.error("Error fetching attendance:", error);
        throw error; // Or handle error as needed
    }
};

// Add a new member
export const addMember = async (memberData: Member): Promise<Member> => {
    try {
        const response = await api.post("members/", memberData);
        return response.data;
    } catch (error) {
        console.error("Error adding member:", error);
        throw error; // Or handle error as needed
    }
};
