import React from 'react';
import { Alert, Spinner } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline"

type SpinnerProps = {
    message?: string;
    hideSpinner?: boolean;
};

const SpinnerComponent: React.FC<SpinnerProps> = ({ message = '', hideSpinner = false }) => (
    <div className="flex flex-col items-center justify-center space-y-2 mt-6">
        <Alert
            icon={!hideSpinner ? <Spinner className="h-6 w-6" /> : <InformationCircleIcon
                strokeWidth={2}
                className="h-6 w-6"
            />}
            color={!hideSpinner ? "blue" : "red"}
        >
            {message && <span>{message}</span>}
        </Alert>
    </div>
);

export default SpinnerComponent;