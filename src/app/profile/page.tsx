"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true); 

  useEffect(() => {
    if (window.innerWidth >= 768) {
      router.replace("/"); 
    } else {
      setIsChecking(false); 
    }
  }, [router]);

  // Saat masih mengecek, tampilkan kosong atau loading spinner
  if (isChecking) {
    return null; // atau bisa ganti <div>Loading...</div>
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg font-semibold">Halaman Profile (Mobile Only)</p>
    </div>
  );
}
