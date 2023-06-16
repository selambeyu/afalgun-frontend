import  ProtectedRoute  from 'src/guards/protected-route';

export const withAuthGuard = (Component) => (props) => (
  <ProtectedRoute>
    <Component {...props} />
  </ProtectedRoute>
);
