const {Component, PropTypes, createElement} = require('react');

function connect(selector, toProps, Cmp) {
    class Connect extends Component {
        constructor(props, context) {
            super(props, context);

            this.herux = context.herux;
            this.state = {
                stores: selector(context.herux, props).map((storeName) => context.herux.getStore(storeName))
            };
        }

        componentDidMount() {

        }

        componentWillReceiveProps(nextProps) {

        }

        componentWillUnmount() {

        }

        render() {
            return createElement(Cmp, toProps(this.state.stores));
        }
    }

    Connect.contextTypes = {
        herux: PropTypes.object
    };

    return Connect;
}

exports.connect = connect;
