import React, { useCallback } from "react";

import { CardHeader, Input, Col, Row } from "reactstrap";
import { useHomeStays } from "store/homestay/hooks";
import styled from "styled-components";
import HomeStay from "store/homestay/types";
import { FAKE_HOMESTAY } from "store/homestay/function";

const SCol = styled(Col)`
	display: flex;
    align-items: center;
    margin-bottom: 4px;
`;

interface Props {
	homestay: HomeStay | undefined;
	selectHomeStayHandle: (home: HomeStay) => void;
}

const TableHeader = React.memo(({ homestay, selectHomeStayHandle }: Props) => {
    const homestays = useHomeStays();
    
    const onChangeHandle = useCallback((e)=>{
        console.log(e.target.value)
        let homeStay: HomeStay = homestays.find( item=> item.id === e.target.value) || FAKE_HOMESTAY;
        selectHomeStayHandle(homeStay);
    },[homestays])
	return (
		<CardHeader className="border-0">
			<Row>
				<SCol md={4}>
					<h3 className="mb-0">Users table</h3>
				</SCol>
				<SCol md={8}>
					<Input
						type={"select"}
                        value={homestay ? homestay.id : FAKE_HOMESTAY.id}
                        onChange={onChangeHandle}
					>   
                        <option value={FAKE_HOMESTAY.id}>I dont have</option>
						{homestays.map((homestay) => {
							return (
								<option key={homestay.id} value={homestay.id}>
									{homestay.name}
								</option>
							);
						})}
					</Input>
				</SCol>
			</Row>
		</CardHeader>
	);
});

export default TableHeader;
