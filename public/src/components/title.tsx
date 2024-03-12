interface TitleProps {
	title?: string;
	subtitle?: string;
}

export const Title = ({title, subtitle}: TitleProps) => {
	return (
		<div style={{paddingBottom: "20px"}}>
			<h4 style={{color:'#3B3B3B'}}>{title}</h4>
			<h6 style={{color:'#3B3B3B'}}>{subtitle}</h6>
		</div>
	);
};
