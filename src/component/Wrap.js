
import React from 'react';

// 받을때 children 객체를 받는다.
function Wrap({ children }) {

   // 해당 항목에 추가해준다.
   return <div className="wrap">{children}</div>
   
}

export default Wrap;