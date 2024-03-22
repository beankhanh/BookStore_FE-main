import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
	return (
		<div className='container-fluid pt-5 pb-4 text-dark d-flex justify-content-center align-items-center'>
			<div>
				<h3
					data-text='Không có gì có thể thay thế văn hóa đọc.'
					className='banner-text display-5 fw-bold'
				>
					Không có gì có thể thay thế văn hóa đọc.
				</h3>
				<p className=''>-- Gunte Grass --</p>
				<Link to={"/search"}>
					<button className='btn btn-primary btn-lg text-white float-end'>
						Khám phá ngay
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Banner;
