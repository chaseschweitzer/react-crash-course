import {connect} from 'react-redux';
import {Target} from '../components/Target';
import {hit} from '../store';

const mapDispatchToProps = {
    hit
};

export default connect(null, mapDispatchToProps)(Target);
