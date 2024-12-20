declare namespace JSX {
  interface IntrinsicElements {
    'gmpx-api-loader': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      key: string;
      'solution-channel': string;
    };
    'gmpx-store-locator': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'map-id': string;
    };
  }
} 