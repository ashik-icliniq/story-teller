import React from 'react';
import { Breadcrumb as BreadcrumComponent } from 'flowbite-react';


function Breadcrumb({...props}) {

  const {content} = props;
  return (
    <BreadcrumComponent aria-label="Solid background breadcrumb example"
    className="bg-cyan-50 py-3 px-5 dark:bg-gray-900">
      <BreadcrumComponent.Item
        href="#"
      >
        iCliniq
      </BreadcrumComponent.Item>
      <BreadcrumComponent.Item>
        {content && content}
      </BreadcrumComponent.Item>
    </BreadcrumComponent>
    
  )
}

export default Breadcrumb