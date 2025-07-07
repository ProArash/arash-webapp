'use client';
import { useSearchParams } from 'next/navigation';
import ProductContainer from '../../components/Product/ProductContainer';

const ProductPage = () => {
	const id = useSearchParams().get('id') || '';
	return (
		<div className="p-5">
			<ProductContainer pId={id} />
		</div>
	);
};

export default ProductPage;
