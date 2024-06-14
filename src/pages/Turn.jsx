import React, { useEffect } from 'react';
import $ from 'jquery';
import  "./Turn.jsx"

const Turn = ({ options, children, className }) => {
  useEffect(() => {
    const $el = $(`#${className}`);

    if ($el.length > 0) {
      $el.turn(options);
    }

    return () => {
      if ($el.length > 0) {
        $el.turn('destroy');
      }
    };
  }, [options, className]);

  return (
    <div id={className} className={className}>
      {children}
    </div>
  );
};

export default Turn;
