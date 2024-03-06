

interface TitleProps {
	title?: string;
	subtitle?: string;
}

export const Title = ({title, subtitle}: TitleProps) => {
	return (
		<div style={{paddingBottom: "20px"}}>
			<h4>{title}</h4>
			<h6>{subtitle}</h6>
		</div>
	);
};
