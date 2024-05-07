"use client";

import toast, { Toaster } from "react-hot-toast";

export const MessageContainer = () => {
  return (
    <Toaster
      position="bottom-center"
      gutter={4}
      toastOptions={{
        duration: 5000,
      }}
    />
  );
};

export const message = (message: string) =>
  toast((t) => <span onClick={() => toast.dismiss(t.id)}>{message}</span>, {
    style: {
      cursor: "pointer",
      borderRadius: "8px",
      padding: "16px",
      color: "#000",
      textAlign: "center",
      userSelect: "none",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    },
  });
