import { render } from '@testing-library/react';

import AqeumWebFeatureHome from './aqeum-web-feature-home';

describe('AqeumWebFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AqeumWebFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
