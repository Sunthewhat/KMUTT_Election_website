import { Card, Flex, Image } from "antd";
import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface CouncilCardProps {
  firstname?: string;
  lastname?: string;
  studentId?: string;
  faculty?: string;
  imageUrl?: string;
  position?: string;
}

export const PartyMemberCard = ({
  firstname,
  lastname,
  studentId,
  faculty,
  imageUrl,
  position,
}: CouncilCardProps) => {
  return (
    <Card style={{marginTop: "1em"}}>
      <Flex >
        <Flex style={{ verticalAlign: "middle", flexDirection: "column" }}>
          <Image
            src={imageUrl}
            alt="Student Image"
            width={120}
            height={150}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
        </Flex>
        <Flex style={{ flexDirection: "column", marginLeft: "2em" }}>
          <Flex
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h4>{firstname}</h4>
            <h4>{lastname}</h4>
            <p>{studentId}</p>
            <p>{faculty}</p>
            <p>{position}</p>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
