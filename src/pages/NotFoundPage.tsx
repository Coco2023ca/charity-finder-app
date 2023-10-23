import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    const error = useRouteError();

    if (!isRouteErrorResponse(error)) {
        return null;
    }

    return (
     <div className="text-center p-8">
        <p>Sorry, an unexpected error has occurred. </p>
        <p className="italic">{error?.status || error?.data}</p>
     </div>
    );
  }
  
  export default NotFoundPage;