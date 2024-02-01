'use client'
import Isotope from 'isotope-layout';
import { useEffect, useRef } from 'react';
import imagesLoaded from 'imagesloaded';

export const Photos = (): JSX.Element => {

  const isotopeRef = useRef<Isotope | null>(null);

  useEffect(() => {
    // Reference to the Isotope instance
    let iso: Isotope | null = null;

    // Check if window is defined (client-side check)
    if (typeof window !== 'undefined') {
      // Reference to the grid element
      const grid = document.querySelector('.jtw-photos-grid') as HTMLElement;

      // Use imagesLoaded to wait for all images to load
      const imgLoad = imagesLoaded(grid);

      imgLoad.on('always', () => {
        // Initialize Isotope after all images have loaded
        iso = new Isotope(grid, {
          itemSelector: '.jtw-photo',
          layoutMode: 'masonry'
        });

        // Assign the Isotope instance to the ref
        isotopeRef.current = iso;
      });
    }

    // Cleanup function to destroy Isotope instance on component unmount
    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div className="jtw-photos-grid">
            <img className="jtw-photo" src="/photoBoardPics/102_1949.jpeg"/>
            <img className="jtw-photo" src="/photoBoardPics/102_1959.jpeg"/>
            <img className="jtw-photo" src="/photoBoardPics/001792910034.jpeg"/>
            <img className="jtw-photo" src="/photoBoardPics/001822150006.jpeg"/>
            <img className="jtw-photo" src="/photoBoardPics/001822150009.jpeg"/>
            <img className="jtw-photo" src="/photoBoardPics/001960260004.jpeg"/>
        </div>
    )
}