const {Children, Component} = require('react');

class Provider extends Component {
    getChildContext() {
        return { heruxCtx: this.props.heruxCtx };
    }
    render() {
        return Children.only(this.props.children);
    }
}

exports.Provider = Provider;
