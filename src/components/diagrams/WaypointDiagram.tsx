export default function WaypointDiagram() {
  return (
    <svg
      viewBox="0 0 700 220"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Architecture diagram: Next.js frontend connects to an Express API, which connects to PostgreSQL via Prisma"
    >
      <defs>
        <marker
          id="waypoint-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="#58a6ff" />
        </marker>
      </defs>

      <line
        x1="184"
        y1="90"
        x2="256"
        y2="90"
        stroke="#58a6ff"
        strokeWidth="1.5"
        markerEnd="url(#waypoint-arrow)"
      />
      <line
        x1="424"
        y1="90"
        x2="496"
        y2="90"
        stroke="#58a6ff"
        strokeWidth="1.5"
        markerEnd="url(#waypoint-arrow)"
      />

      <g>
        <rect
          x="20"
          y="40"
          width="164"
          height="100"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
        />
        <text
          x="102"
          y="68"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
          fontWeight="700"
          fill="#e6edf3"
        >
          Next.js
        </text>
        <text
          x="102"
          y="90"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Search · Hotel detail
        </text>
        <text
          x="102"
          y="106"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Booking flow
        </text>
        <text
          x="102"
          y="122"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Auth pages
        </text>
      </g>

      <g>
        <rect
          x="260"
          y="40"
          width="164"
          height="100"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
        />
        <text
          x="342"
          y="68"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
          fontWeight="700"
          fill="#e6edf3"
        >
          Express API
        </text>
        <text
          x="342"
          y="90"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          JWT Auth
        </text>
        <text
          x="342"
          y="106"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Seat/room holds
        </text>
        <text
          x="342"
          y="122"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Guest checkout
        </text>
      </g>

      <g>
        <rect
          x="500"
          y="40"
          width="164"
          height="100"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
        />
        <text
          x="582"
          y="68"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
          fontWeight="700"
          fill="#e6edf3"
        >
          PostgreSQL
        </text>
        <text
          x="582"
          y="90"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          via Prisma
        </text>
        <text
          x="582"
          y="106"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          16 tables
        </text>
        <text
          x="582"
          y="122"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Flights · Hotels · Bookings
        </text>
      </g>

      <text
        x="350"
        y="190"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10.5"
        fill="#6e7681"
      >
        seeded with real Canadian airports, airlines &amp; hotels
      </text>
    </svg>
  );
}
