export default function ProjectArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 700 220"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Architecture diagram: React Native app connects to an Express API, which connects to MongoDB and Stripe"
    >
      <defs>
        <marker
          id="arrow"
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
        markerEnd="url(#arrow)"
      />
      <line
        x1="424"
        y1="90"
        x2="496"
        y2="90"
        stroke="#58a6ff"
        strokeWidth="1.5"
        markerEnd="url(#arrow)"
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
          React Native
        </text>
        <text
          x="102"
          y="90"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Search
        </text>
        <text
          x="102"
          y="106"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Book · Schedule
        </text>
        <text
          x="102"
          y="122"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Pay · Review
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
          JWT Auth · OTP
        </text>
        <text
          x="342"
          y="106"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Stripe Payments
        </text>
        <text
          x="342"
          y="122"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Multer Uploads
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
          MongoDB
        </text>
        <text
          x="582"
          y="90"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Users · Services
        </text>
        <text
          x="582"
          y="106"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Schedules
        </text>
        <text
          x="582"
          y="122"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          Payments · Feedback
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
        two-sided marketplace: vendors manage services, customers search / book / pay
      </text>
    </svg>
  );
}
