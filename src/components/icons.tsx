import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  react: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      {...props}
    >
      <circle cx="64" cy="64" r="64" fill="currentColor" />
      <path
        d="M87.39 105.81V43.19h-10.1v50.44L52.53 43.19h-9.3v62.62h10.1V55.37l24.76 50.44h9.3z"
        fill="#fff"
      />
    </svg>
  ),
  typescript: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      {...props}
    >
      <rect width="128" height="128" rx="32" fill="currentColor" />
      <path
        fill="#fff"
        d="M51.13 88V53.82h12.18v-8H39v8h8.9v34.18h3.23Zm40.52-25.56c0-3.23-1.42-5.7-4.25-7.44-2.83-1.7-6.8-2.9-11.9-3.56v-2.3c3.7-.6 6.5-1.74 8.4-3.4c1.9-1.66 2.86-3.8 2.86-6.44c0-2.86-1-5.06-3.05-6.6c-2-1.54-4.8-2.3-8.3-2.3c-3.7 0-6.5.73-8.4 2.2c-1.9 1.45-2.8 3.52-2.8 6.2h9.4c0-1.2.4-2.06 1.1-2.6c.7-.5 1.8-.8 3.3-.8c1.6 0 2.7.3 3.4.9c.7.6 1 1.5 1 2.6c0 1.3-.4 2.3-1.3 3s-2.5 1-4.7 1.4v2.2c5.9.6 9.5 2.1 11.8 4.4c2.3 2.3 3.4 5.4 3.4 9.1c0 3.3-1 6-3 8.1c-2 2.1-4.9 3.1-8.6 3.1c-4.1 0-7.2-.9-9.3-2.8c-2-1.9-3-4.5-3-7.8h9.4c0 2 .5 3.5 1.5 4.5c1 1 2.5 1.5 4.5 1.5c2.1 0 3.6-.5 4.5-1.4c.9-1 .9-2.2.9-3.7Z"
      />
    </svg>
  ),
  tailwind: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.5 12.5c2.5-3 2.5-7-1.5-9.5-4.5-2-9.5 2-7.5 6.5 1.5 3.5 4.5 4.5 6.5 5" />
      <path d="M14 14c-4.5 2.5-10.5.5-12.5-4.5-2.5-5.5 2-11.5 7.5-9.5 5.5 2 7.5 7.5 5 12" />
    </svg>
  ),
  javascript: (props: SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 20l4-16" />
      <path d="M17 21l4-16" />
      <path d="M3 21l4-16" />
    </svg>
  ),
  python: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.86 10.33a1.56 1.56 0 0 0-3.72 0" />
      <path d="M10.14 13.67a1.56 1.56 0 0 0 3.72 0" />
      <path d="M12 21a9 9 0 0 0 9-9" />
      <path d="M12 3a9 9 0 0 0-9 9" />
      <path d="M12 21a9 9 0 0 0-4.67-7.89" />
      <path d="M12 21a9 9 0 0 1-4.67-7.89" />
      <path d="M3.11 12.5A9 9 0 0 1 12 3a9 9 0 0 1 4.67 7.89" />
      <path d="M20.89 11.5A9 9 0 0 0 12 3a9 9 0 0 0-4.67 7.89" />
    </svg>
  ),
  java: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 8v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2" />
      <path d="M10 8h4" />
      <path d="M17 11s-2 2-4 2-4-2-4-2" />
      <path d="M7 13c0 4 4 4 4 4h2c4 0 4-4 4-4" />
    </svg>
  ),
  html: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 16 4-2-4-2" />
      <path d="m6 8-4 2 4 2" />
      <path d="m14.5 4-5 16" />
    </svg>
  ),
  css: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
        <path d="m18 16 4-2-4-2" />
        <path d="m6 8-4 2 4 2" />
        <path d="m14.5 4-5 16" />
    </svg>
  ),
  figma: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  ),
  firebase: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.62 16.51l5.89-13.02a.93.93 0 0 1 1.78 0l2.4 5.3L19.38 3.5a.91.91 0 0 1 1.64.87v14.12a2.3 2.3 0 0 1-2.3 2.3H5.28a2.3 2.3 0 0 1-2.3-2.3v-2.07a.91.91 0 0 1 .64-.87z" />
    </svg>
  ),
};
