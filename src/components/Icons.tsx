import logo from '../assets/logo.png'

interface IconProps {
  className?: string;
}

export const UserIcon = ({ className }: IconProps) => (
  <svg 
    viewBox="0 0 52 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M26 0C11.648 0 0 11.648 0 26C0 40.352 11.648 52 26 52C40.352 52 52 40.352 52 26C52 11.648 40.352 0 26 0ZM26 7.8C30.316 7.8 33.8 11.284 33.8 15.6C33.8 19.916 30.316 23.4 26 23.4C21.684 23.4 18.2 19.916 18.2 15.6C18.2 11.284 21.684 7.8 26 7.8ZM26 44.72C19.5 44.72 13.754 41.392 10.4 36.348C10.478 31.174 20.8 28.34 26 28.34C31.174 28.34 41.522 31.174 41.6 36.348C38.246 41.392 32.5 44.72 26 44.72Z" 
    fill="#0B2878"
    />
  </svg>
);

export const Logo = ({ className }: IconProps) => (
  <svg 
    viewBox="0 0 96 74" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
  >
    <rect width="96" height="74" fill="url(#pattern0_1_99)"/>
    <defs>
      <pattern id="pattern0_1_99" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use 
            xlinkHref="#image0_1_99" 
            transform="matrix(0.00113525 0 0 0.00147275 -0.00064433 0)"
        />
      </pattern>
      <image 
        id="image0_1_99" 
        width="882" 
        height="679" 
        preserveAspectRatio="none" 
        href={logo} 
      />
    </defs>
  </svg>
);

export const CloseIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const CopyIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
  </svg>
);
