import React, { useState, useEffect, useCallback } from "react";

import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
	Table,
	Container,
	Row,
	UncontrolledTooltip,
	Col,
} from "reactstrap";
import Header from "components/Headers/Header";
import { User } from "../../store/user/types";
import styled from "styled-components";
import HomeStayRow from "./HomeStayRow";
import { useHomeStays } from "store/homestay/hooks";


const STable = styled(Card)`
`

const HomeStay = React.memo(() => {
	const homestays = useHomeStays();
	const [homestay, select] = useState<User>();
	const selecHomeStayHandle = useCallback((homestay) => {
		select(homestay);
	}, []);

	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<Row>
					<Col>
						<STable className="shadow">
							<CardHeader className="border-0">
								<h3 className="mb-0">HomeStay Table</h3>
							</CardHeader>
							<Table
								className="align-items-center table-flush"

							>
								<thead className="thead-light">
									<tr>
										<th scope="col">Tên HomeStay</th>
										<th scope="col"> Mô tả</th>
										<th scope="col"> Ảnh</th>
                                        <th scope="col" />
									</tr>
								</thead>
								<tbody>
									{homestays.map(homestay => (
										<HomeStayRow
                                            key={homestay.id}
											homestay={homestay}
											selecHomeStayHandle={selecHomeStayHandle}
										/>
									))}
								</tbody>
							</Table>
							<CardFooter className="py-4"></CardFooter>
						</STable>
					</Col>

				</Row>
			</Container>
		</>
	);
});

export default HomeStay;
