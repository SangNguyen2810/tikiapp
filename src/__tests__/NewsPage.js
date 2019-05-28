
import React from 'react';
import { mount, shallow } from 'enzyme';
import NewsPage from '../containers/NewsPage';
import LoadingComponent from '../components/Loading'
describe('LoadingIndicator', () => {
  describe('When IsLoading is true', () => {
    it('should render loading component', () => {
      const wrapper = mount(
        <NewsPage isLoading={true}>
          <LoadingComponent />
        </NewsPage>
      );
      expect(wrapper.html()).toEqual('<LoadingComponent />');
      wrapper.unmount();
    });
  });
});