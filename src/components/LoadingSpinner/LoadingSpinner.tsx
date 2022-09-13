import React from 'react';
import './LoadingSpinner.scss';

export interface Props {
  loading?: boolean;
  overlay?: boolean;
  label?: string;
}

const LoadingSpinner: React.FC<Props> = ({ loading, label, overlay }) => {
  if (!loading) return null;

  return (
    <div className="centerLoading">
      <div className={`loading-spinner ${overlay ? '-overlay' : ''}`} data-cy="loading-spinner">
        <div>
          {!!label && <p style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '28px' }}>{label}</p>}
          <div>
            <span className="circle-yellow" />
            <span className="circle-orange" />
            <span className="circle-red" />
            <span className="circle-green" />
            <span className="circle-turquoise" />
            <span className="circle-blue" />
            <span className="circle-purple" />
          </div>
        </div>
      </div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  loading: false,
  overlay: false,
  label: '',
};

export default LoadingSpinner;
