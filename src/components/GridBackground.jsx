import React from "react";

function GridBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 bg-[#050816] -z-20"></div>

      {/* Grid */}
      <div
        className="fixed inset-0 opacity-[0.06] -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Purple Glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-20 -z-10" />

      {/* Cyan Glow */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[180px] opacity-20 -z-10" />
    </>
  );
}

export default GridBackground;