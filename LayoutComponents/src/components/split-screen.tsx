import styled from "styled-components";
import React from "react";

interface SplitScreenProps {
  leftWidth: number;
  rightWidth: number;
  children: React.ReactNode[];
}

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div<{ flex: number }>`
  flex: ${(p) => p.flex};
`;

export const SplitScreen: React.FC<SplitScreenProps> = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: SplitScreenProps) => {
  const [left, right] = children as React.ReactElement[];

  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};
