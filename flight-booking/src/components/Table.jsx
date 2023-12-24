import React from 'react';
import TableRow from "./TableRow";
import {useSelector} from "react-redux";

function Table(props) {

    const tableData = useSelector(state => state.booking);

    return (
        <div className="table-container">
            <table className="booking-table">
                <thead className="bg-gray-100/50">
                <tr className="text-black text-left">
                    <th>Destination From</th>
                    <th>Destination To</th>
                    <th className="text-center">Journey Date</th>
                    <th className="text-center">Guests</th>
                    <th className="text-center">Class</th>
                    <th className="text-center">Delete</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                {/*// <!-- Rows -->*/}
                {
                    tableData.map((data, index) => {
                        return (
                            <TableRow
                                dataID={data.id}
                                from={data.from}
                                to={data.to}
                                date={data.date}
                                guests={data.guests}
                                flightClass={data.class}
                            />
                        );
                    })
                }

                {/*// <!-- Row 1 -->*/}
                {/*<TableRow />*/}

                {/*// <!-- Row 2 -->*/}
                {/*<TableRow />*/}

                {/*// <!-- Row 3 -->*/}
                {/*<TableRow />*/}
                </tbody>
            </table>
        </div>
    );
}

export default Table;