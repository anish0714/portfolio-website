export default function DevPulseDiagram() {
  return (
    <svg
      viewBox="0 0 700 220"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Architecture diagram: a shell app loads the pdf-conversion-remote and pdf-manipulation-remote micro-frontends at runtime via Webpack Module Federation"
    >
      <defs>
        <marker
          id="devpulse-arrow"
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

      <path
        d="M 200,95 L 340,45"
        stroke="#58a6ff"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#devpulse-arrow)"
      />
      <path
        d="M 200,125 L 340,175"
        stroke="#58a6ff"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#devpulse-arrow)"
      />

      <g>
        <rect
          x="20"
          y="70"
          width="180"
          height="80"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
        />
        <text
          x="110"
          y="100"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
          fontWeight="700"
          fill="#e6edf3"
        >
          Shell (host)
        </text>
        <text
          x="110"
          y="120"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          fill="#8b949e"
        >
          sidebar nav · lazy-loads tools
        </text>
        <text
          x="110"
          y="136"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          fill="#6e7681"
        >
          /devpulse-mfe/
        </text>
      </g>

      <g>
        <rect
          x="340"
          y="10"
          width="180"
          height="70"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
        />
        <text
          x="430"
          y="36"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11.5"
          fontWeight="700"
          fill="#e6edf3"
        >
          pdf-conversion-remote
        </text>
        <text
          x="430"
          y="54"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          fill="#6e7681"
        >
          images/Word &#8594; PDF, merge
        </text>
        <text
          x="430"
          y="68"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          fill="#6e7681"
        >
          /remotes/pdf-conversion/
        </text>
      </g>

      <g>
        <rect
          x="340"
          y="140"
          width="180"
          height="70"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
        />
        <text
          x="430"
          y="166"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11.5"
          fontWeight="700"
          fill="#e6edf3"
        >
          pdf-manipulation-remote
        </text>
        <text
          x="430"
          y="184"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          fill="#6e7681"
        >
          text, highlight, redact, delete
        </text>
        <text
          x="430"
          y="198"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          fill="#6e7681"
        >
          /remotes/pdf-manipulation/
        </text>
      </g>

      <text
        x="600"
        y="105"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9.5"
        fill="#6e7681"
      >
        built &amp;
      </text>
      <text
        x="600"
        y="118"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9.5"
        fill="#6e7681"
      >
        deployed
      </text>
      <text
        x="600"
        y="131"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9.5"
        fill="#6e7681"
      >
        independently
      </text>
    </svg>
  );
}
