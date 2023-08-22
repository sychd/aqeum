import { render } from '@testing-library/react';

import AqeumWebFeatureProfile from './aqeum-web-feature-profile';

describe('AqeumWebFeatureProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AqeumWebFeatureProfile />);
    expect(baseElement).toBeTruthy();
  });
});
