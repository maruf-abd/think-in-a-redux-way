import React, {useRef} from 'react';
import Vector1 from '../assets/images/icons/Vector (1).svg';
import Vector3 from '../assets/images/icons/Vector (3).svg';
import Frame from '../assets/images/icons/Frame.svg';
import {useDispatch, useSelector} from "react-redux";
import {addBooking} from "../redux/booking/actions";

function Form(props) {

    const fromRef = useRef();
    const toRef = useRef();
    const dateRef = useRef();
    const guestRef = useRef();
    const classRef = useRef();

    const dispatch = useDispatch();
    const tableData = useSelector(state => state.booking);

    const submitHandler = (e) => {
        e.preventDefault();

        const from = fromRef.current.value;
        const to = toRef.current.value;
        const date = dateRef.current.value;
        const guests = guestRef.current.value;
        const flightClass = classRef.current.value;

        const data = {
            from,
            to,
            date,
            guests,
            flightClass
        }

        if (tableData.length >= 0 && tableData.length < 4) {
            dispatch(addBooking(data));
        } else if (tableData.length >= 4) {
            alert("You can book maximum 4 tickets");
        }
    }


    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform" onSubmit={submitHandler}>
                    {/*// <!-- From -->*/}
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={Frame} alt=""/>
                            <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required ref={fromRef}>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/*// <!-- To -->*/}
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={Frame} alt=""/>
                            <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required ref={toRef}>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/*// <!-- Date -->*/}
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date"
                               required ref={dateRef}/>
                    </div>

                    {/*// <!-- Guests -->*/}
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={Vector1} alt=""/>
                            <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required ref={guestRef}>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    {/*// <!-- Class -->*/}
                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src={Vector3} alt=""/>
                            <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass"
                                    required ref={classRef}>
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button className="addCity" type="submit" id="lws-addCity">
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;