import React, { memo, lazy, Suspense } from 'react';

const LoadComponent = ({componentName, ...props}) => {
    const PageComponent = lazy(() => import(`../components/pages/${componentName}`));

    return <Suspense fallback={<div>Loading...</div>}>
        <PageComponent {...props} />
    </Suspense>
};

export default memo(LoadComponent);