import React, { useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { useUser } from "@clerk/nextjs";
import { db } from "@/app/firebase"
import { doc, setDoc, getDoc } from "firebase/firestore";

const TestNet = () => {
    const { user } = useUser();
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            const saveUserData = async () => {
                try {
                    const userRef = doc(db, "users", user.id);
                    await setDoc(userRef, {
                        username: user.username,
                        email: user.emailAddresses[0].emailAddress
                    }, { merge: true });
                } catch (error) {
                    console.error("Error saving user data: ", error);
                }
            };

            const fetchUserEmail = async () => {
                try {
                    const userRef = doc(db, "users", user.id);
                    const userSnap = await getDoc(userRef);
                    if (userSnap.exists()) {
                        const data = userSnap.data();
                        setEmail(data.email);
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching user data: ", error);
                }
            };

            saveUserData();
            fetchUserEmail();
        }
    }, [user]);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 container mx-auto p-4 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Test Net</h1>
                    <p className="text-gray-700">Welcome {user?.firstName || user?.username}</p>
                    {email && (
                        <p className="text-gray-600 mt-2">
                            This is your email and it is saved in the database: {email}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TestNet