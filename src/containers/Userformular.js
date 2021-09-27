import React from 'react';
import LayoutWrapper from '../components/utility/layoutWrapper';
import Papersheet from '../components/utility/papersheet';
import { FullColumn } from '../components/utility/rowColumn';
import IntlMessages from '../components/utility/intlMessages';

import Checkout from './MySurvey/Checkout';
import VerticalLinearStepper from './MySurvey/Main';


import { FormsComponentWrapper, FormsMainWrapper } from './forms.style';

export default () => (
	<LayoutWrapper>
		<FormsMainWrapper>
			<FormsComponentWrapper className=" mateFormsComponent ">
				<FullColumn>
					<Papersheet>
						<VerticalLinearStepper />
					</Papersheet>
				</FullColumn>
			</FormsComponentWrapper>
		</FormsMainWrapper>
	</LayoutWrapper>
);
