import React, { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { MainContainer } from '../../../common/MainContainer';

import { CardType, getCards } from './pack-item-reducer';
import classes from './PackItem.module.css';
import { selectedCards, selectedPackName } from './selectors';

import { CardItem } from 'componets/CardItem';
import { RootState } from 'store';

const PackItems: FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const packName = useSelector<RootState, string>(selectedPackName);
  const cards = useSelector<RootState, CardType[]>(selectedCards);
  const cardsPackID = useSelector<RootState, string>(state => state.cards.cardsPack_id);
  useEffect(() => {
    dispatch(getCards());
  }, [packName]);
  if (cardsPackID === '') {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    navigate('/packs-list');
  }
  return (
    // const navigate = useNavigate();
    // const createdDate = new Date(cards.created).toLocaleDateString();
    <MainContainer>
      <div style={{ width: '100%', padding: '30px' }}>
        <div className={classes.link}>
          <NavLink to="/packs-list">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAECUlEQVRoge3a329URRQH8E8V6RJUaGFp45NEg1ZI5Z1gjD+LYFJ9U/ENgi/8CPqq/g8mJP4jSiAKVvwBigpqrC3oi0oUY0w0Vgia9WHmZq643b337t1tTfgmN5PcmTnnOzvnnHvmzHIDywtDNcoaxQPYhvtwFzZgdez/Az/hW3yF9/Aufq2RQ2U08DyO42+0Sj5/4Rh2Y3jA3MEqvIhLOVJXcAIvYxoTGMEt8RmJ76bxCk7GOdn8H3BY+HEGgp34JkfgY+zBmgqy1mIvzubkXcSOWpguggZezyn8BI/VKH8Kn+XkH9GH3RkXiLcEp92Pm+tWEmUexIK022N1Cd8obHcLs9hSl+AOmMRc1HkhcugJzZzAj7C+V4ElMCKE6Jbgk+NVBTUkc/pA+h4MEqtxWjKzSj6TOfas8LFbKqyTrOJI2ck7JccehE90w6QUAKaKTlolfSf294dXJRySnL+Qib0kfSf6EWKrYgXOCdwOdRs8LKQKLTzaX16V8ITA7ZIuu7JbihBVMC6kGx9WnN8NQ1IkfbbTwONx0J4KSsaF9LyFT9V7RMhjX9RxdLEBo0JafUX5BHBMWsSsHj5eBTCCq7hmEZ5PRSJvlxS8AV/EuV/jjuocC2Mm6nsye3FTrnNbbN8pIXBMOFdsERbxoOCI/cbJ2G7PXuQXMhHb8wWFNfGWcKydw8P4sUeCRZFxvLdd57ywXRPtOq9D3pz67RPtsFky5f/gl9jZLa9q4nOD9YnrsT7qv9yu82rsXNlBwJC0iH4+p7osZFiqE+DfPlIUrQpzBqqjimnNWRrTaupgWv9rZ8+b1oXYbiog6DIewpdCCJwx2J25J7bz2Yv8QmZje39BYT/jESE12SRkBIPamcnYtg2/08J2nSgpNG9mg/KZLEXZ1a5zREoa15YUPMikcVRKGm9fbNCxSGZvBQX5NP5chflF8ULU8WanQc/FQWcrKhkXFnG64vxuGBLOOi0802ngML6PAx/vE5lesEvg9p0C1xCHpVPecis+nBe4HSgyoSHVeg/2j1dpZD/wnBKXQjvipAUpZi8ltuJPgVPpq4wj0i+wrl5epdAUso4WXqsioCGUhVpCFFqKIvatOBM5nNHDPWNTSAOya4VmHewKYhTvS9dxPV/4bJS2dk7xXKwXbM3pnMeddQkek8xsQai9rqhLeA4rhOiUOfYZIZerFQ0pAGRpSF23r0PCVUb2ncgcu69371PStmdV+31C0lkWo0LulKUdmSnVeVvcEQ3BvLJ0piVkpDN4VahabhbC9sr4rBMKeU/HMTNSwSNLOw5Yon9ADAtV8aPCEaBsteQa3hASwJ4WUGfFfI3wp5rtwrn/biFc3xb7fxeOyBeFkH5K2JXfauRwA8sG/wDnLUmm9psk8QAAAABJRU5ErkJggg=="
              alt="arrow back"
            />
          </NavLink>
          <span className={classes.title}>{packName}</span>
        </div>
        <div className={classes.tableHeader}>
          <div>Question</div>
          <div>Answer</div>
          <div>Lasted Update</div>
          <div>Grade</div>
        </div>
        <div>
          {cards.map(card => (
            <CardItem key={card.created} card={card} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
});

export { PackItems };
