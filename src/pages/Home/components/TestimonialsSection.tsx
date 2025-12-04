"use client";

import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="relative bg-[#F3FFFA] overflow-hidden"
      style={{ width: "1920px", height: "914px" }}
    >
      {/* Decorative wave graphic */}
      <img
        src="/images/waves-green.png"
        alt=""
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "540px",
          opacity: 0.28,
          pointerEvents: "none",
        }}
      />

      {/* LEFT SIDE */}
      <div
        style={{
          position: "absolute",
          left: "180px",
          top: "70px",
          width: "600px",
        }}
      >
        {/* Badge */}
        <span
          style={{
            display: "inline-block",
            background: "#FFF5B8",
            borderRadius: "30px",
            padding: "6px 22px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.4px",
            color: "#3A3A3A",
          }}
        >
          MARVELLEX
        </span>

        {/* Heading */}
        <h2
          style={{
            marginTop: "26px",
            fontSize: "44px",
            lineHeight: "1.18",
            fontWeight: 600,
            color: "#111",
          }}
        >
          Yup, That’s <br /> What They Said
        </h2>

        {/* Avatar Row */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            gap: "26px",
            alignItems: "center",
          }}
        >
          {["/images/avatar-1.png","/images/avatar-2.png","/images/avatar-3.png","/images/avatar-4.png","/images/avatar-5.png"].map(
            (src, i) => (
              <div
                key={i}
                style={{
                  width: "56px",
                  height: "56px",
                  overflow: "hidden",
                  clipPath:
                    "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
                }}
              >
                <img
                  src={src}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )
          )}
        </div>

        {/* Underline */}
        <div
          style={{
            marginTop: "26px",
            width: "180px",
            height: "2px",
            background: "#0FAF7B",
          }}
        />

        {/* Testimonial Card */}
        <div
          style={{
            marginTop: "40px",
            width: "600px",
            height: "260px",
            background: "#007853",
            borderRadius: "36px",
            padding: "38px 44px",
            boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
            color: "white",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.55",
              opacity: 0.9,
            }}
          >
            “Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
            dolorem queaay antium totam aperiam eaque quae abillosa inventore
            veritatis etuarchite beatae vitaeac voluptas sit aspernatur
            autodit.”
          </p>

          <p
            style={{
              marginTop: "28px",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            ANDREW D. BRICKER
          </p>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.8,
              marginTop: "4px",
              letterSpacing: "0.4px",
            }}
          >
            CEO & FOUNDER
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        style={{
          position: "absolute",
          right: "240px",
          top: "70px",
          width: "480px",
          height: "630px",
          borderRadius: "30px",
          overflow: "hidden",
          boxShadow: "0px 10px 45px rgba(0,0,0,0.18)",
        }}
      >
        <img
          src="/images/testimonial-man.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Review Badge */}
      <div
        style={{
          position: "absolute",
          top: "330px",
          right: "180px",
          width: "350px",
          height: "118px",
          background: "#007853",
          borderRadius: "12px",
          padding: "28px 28px",
          color: "white",
          boxShadow: "0 10px 35px rgba(0,0,0,0.18)",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "1.3",
          }}
        >
          WE HAVE MORE 3248+ <br />
          REVIEWS FROM GLOBAL <br />
          CLIENTS
        </p>
      </div>

      {/* Dot Grid */}
      <div
        style={{
          position: "absolute",
          right: "190px",
          bottom: "75px",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "14px",
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "rgba(15, 175, 123, 0.38)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;