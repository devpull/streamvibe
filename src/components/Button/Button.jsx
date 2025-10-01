import Icon from '~/components/Icon';
import './Button.scss';
import classNames from 'classnames';

const Button = (props) => {
	const {
		href,
		type = 'button',
		target,
		className,
		label,
		disabled,
		iconPosition = 'before', // 'before' | 'after'
		isLabelHidden = false,
		iconName,
		mode, // '' (default) | 'transparent'
	} = props;
	const isLink = href ?? undefined;
	const Component = isLink ? 'a' : 'button';
	const linkProps = { href, target };
	const buttonProps = { type };
	const specificProps = isLink ? linkProps : buttonProps;
	const title = isLabelHidden ? label : undefined;
	const iconComponent = iconName && (
		<Icon className="button__icon" name={iconName} />
	);

	return (
		<Component
			disabled={disabled}
			className={classNames(className, 'button', {
				[`button--${mode}`]: mode,
			})}
			title={title}
			aria-label={title}
			{...specificProps}
		>
			{iconPosition === 'before' && iconComponent}
			{!isLabelHidden && <span className="button__label">{label}</span>}
			{iconPosition === 'after' && iconComponent}
		</Component>
	);
};

export default Button;
