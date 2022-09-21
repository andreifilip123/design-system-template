import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'mutationobserver-shim';

Enzyme.configure({ adapter: new EnzymeAdapter() });
