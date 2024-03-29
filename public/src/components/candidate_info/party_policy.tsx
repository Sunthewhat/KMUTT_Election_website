import { Card, Flex, Row, Col } from "antd";

interface PartyPolicyProps {
	question?: string[];
	answer?: string[][];
}

export const PartyPolicy = ({
	question,
	answer,
}: PartyPolicyProps) => {
	return (
		<Row gutter={16}>
			{question?.map((q, i) => (
				<Col xs={24} xl={8} key={i}>
					<Flex style={{flexDirection: "column", marginTop: "10px"}}>
						<p>{q}</p>
						{answer?.[i].map((a, j) => (
							<p key={j}>{a}</p>
						))}
					</Flex>
				</Col>
			))}
		</Row>
	);
}
