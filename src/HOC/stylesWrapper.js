import commonStyles from './styles/commonStyles';

const translateProps = (props) => {
  let _styles = {...commonStyles.default};
  if (props.disable) {
    _styles = { ..._styles, ...commonStyles.disable };
  }

  const newProps = {...props, styles: _styles }
  return newProps;
}

const wrappedComponent = (component) => {
  return function wrappedRender(args) {
    return component(translateProps(args));
  }
};

export default wrappedComponent;
