import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Galeria() {
	const gallery = [
		{
			img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
			title: 'Camión',
		},
		{
			img: 'https://images.unsplash.com/photo-1572675339312-3e8b094a544d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Camiones',
		},
		{
			img: 'https://images.unsplash.com/photo-1569448096483-1114dddb646d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
			title: 'Autobus',
		},
	];

	return (
		<div className='container my-14'>
			<h2 className='mb-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Galería
			</h2>

			<div>
				<section>
					<div className='mx-auto max-w-screen-xl'>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar]}
							spaceBetween={50}
							slidesPerView={3}
							navigation
							breakpoints={{
								240: {
									slidesPerView: 1,
								},
								640: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 3,
								},
							}}>
							{gallery.map((i, index) => (
								<SwiperSlide key={index}>
									<div className='aspect-w-1 aspect-h-1'>
										<img
											loading='lazy'
											alt={i.title}
											className='object-cover'
											src={i.img}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</section>
			</div>
		</div>
	);
}
