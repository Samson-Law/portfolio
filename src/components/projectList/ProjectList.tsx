'use client';

import styles from '@Components/projectList/ProjectList.module.scss';
import { Box, CardMedia, ImageListItemBar, Modal, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { right } from '@popperjs/core';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectList = () => {
  const [projectName, setProjectName] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModal = (name: string) => {
    setProjectName(name);
    handleOpen();
  };

  const renderContent = useCallback(() => {
    switch(projectName) {
      case 'hitachi': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/roadshow/Hitachi_roadshow_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/roadshow/Hitachi_roadshow_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/roadshow/Hitachi_roadshow_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/roadshow/Hitachi_roadshow_4.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/gherkinEdm/Hitachi_gherkin_edm_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/gherkinEdm/Hitachi_gherkin_edm_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/emeaEdm/Hitachi_emea_edm_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/emeaEdm/Hitachi_emea_edm_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardMedia
                component="video"
                image='/assets/video/hitachi_display.mp4'
                title='title'
                controls
              />  
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/ebook/Hitachi_ebook_2_html5_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/ebook/Hitachi_ebook_flash_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hitachi/ebook/Hitachi_ebook_html5_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
      )
      case 'bt': 
        return (
          <>
            <SwiperSlide>
              <CardMedia
                component="video"
                image='/assets/video/BT_business_video.mp4'
                title='title'
                controls
              />  
            </SwiperSlide>
        </>
      )
      case 'canon': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/canon/roadshow/Canon_roadshow_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/canon/roadshow/Canon_roadshow_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/canon/roadshow/Canon_roadshow_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/canon/roadshow/Canon_roadshow_4.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/canon/infographic/Canon_infographic_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/canon/infographic/Canon_infographic_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                 src={`/assets/images/project/canon/infographic/Canon_infographic_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                 src={`/assets/images/project/canon/infographic/Canon_infographic_4.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/canon/edm/Canon_roadshow_EDM_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/canon/edm/Canon_roadshow_EDM_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'panasonic': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/campaign/Panasonic_campaign_microsite_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/campaign/Panasonic_campaign_microsite_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/campaign/Panasonic_campaign_microsite_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/campaign/Panasonic_campaign_microsite_4.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/flashBanner/Panasonic_flash_banner_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/toughpad/Panasonic_toughpad_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/toughpad/Panasonic_toughpad_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/toughpad/Panasonic_toughpad_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/panasonic/toughpad/Panasonic_toughpad_4.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'parago': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/parago/chilli/parago_chilli_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/parago/chilli/parago_chilli_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/parago/chilli/parago_chilli_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/parago/chilli/parago_chilli_4.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/parago/ebook/parago_ebook_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/parago/christmasCard/Parago_christmas_card_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'lexmark': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/lexmark/Lexmark_microsite_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/lexmark/Lexmark_microsite_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'kfc': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/kfc/KFC_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/kfc/KFC_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/kfc/KFC_website_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'lac': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/lac/LAC_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/lac/LAC_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/lac/LAC_website_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'clp': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/clp/CLP_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/clp/CLP_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'mfw': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/mfw/MFW_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/mfw/MFW_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'worldExpo': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/worldExpo/WorldExpo_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/worldExpo/WorldExpo_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'yata': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/yata/Yata_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/yata/Yata_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'sfc': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/sfc/SFC_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/sfc/SFC_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'polyUPA': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/polyUPA/PolyUPA_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/polyUPA/PolyUPA_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/polyUPA/PolyUPA_website_3.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'hkuSpace': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hkuSpace/HKUSPACE_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/hkuSpace/HKUSPACE_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      case 'galleria': 
        return (
          <>
            <SwiperSlide>
              <img
                src={`/assets/images/project/galleria/Galleria_website_1.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/assets/images/project/galleria/Galleria_website_2.jpg`}
                alt={''}
                loading="lazy"
              />
            </SwiperSlide>
        </>
        )
      default: 
        return null;
    }
  }, [projectName]);

  return (
    <>
      <div className={styles.projectListContainer}>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('hitachi')}>
            <img
              src={`/assets/images/project/hitachi/roadshow/Hitachi_roadshow_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'Hitachi'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('hitachi')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('bt')}>
            <img
              src={`/assets/images/project/bt/BT_business_video_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'BT'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('bt')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('canon')}>
            <img
              src={`/assets/images/project/canon/roadshow/Canon_roadshow_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'Canon'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('canon')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('panasonic')}>
            <img
              src={`/assets/images/project/panasonic/campaign/Panasonic_campaign_microsite_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'Panasonic'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('panasonic')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('parago')}>
            <img
              src={`/assets/images/project/parago/chilli/parago_chilli_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'Parago'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('parago')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('lexmark')}>
            <img
              src={`/assets/images/project/lexmark/Lexmark_microsite_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'Lexmark'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('lexmark')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('kfc')}>
            <img
              src={`/assets/images/project/kfc/KFC_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'KFC'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('kfc')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('lac')}>
            <img
              src={`/assets/images/project/lac/LAC_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'Living Archi Central'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('lac')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('clp')}>
            <img
              src={`/assets/images/project/clp/CLP_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'CLP Power Hong Kong'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('clp')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('mfw')}>
            <img
              src={`/assets/images/project/mfw/MFW_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'Macau Fishmans Wharf'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('mfw')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('worldExpo')}>
            <img
              src={`/assets/images/project/worldExpo/WorldExpo_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'World Expo'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('worldExpo')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('yata')}>
            <img
              src={`/assets/images/project/yata/Yata_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'Yata'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('yata')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('sfc')}>
            <img
              src={`/assets/images/project/sfc/SFC_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'SFC'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('sfc')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('polyUPA')}>
            <img
              src={`/assets/images/project/polyUPA/PolyUPA_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'PolyUPA'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('polyUPA')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('hkuSpace')}>
            <img
              src={`/assets/images/project/hkuSpace/HKUSPACE_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'HKUSPACE'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('hkuSpace')} />}
            actionPosition={right}
            position="below"
          />
        </div>
        <div className={styles.projectTile}>
          <div className={styles.img} onClick={()=>handleModal('galleria')}>
            <img
              src={`/assets/images/project/galleria/Galleria_website_0.jpg`}
              alt={''}
              loading="lazy"
            />
          </div>
          <ImageListItemBar
            className={styles.bar}
            title={'The Galleria'}
            actionIcon={<LaunchIcon onClick={()=>handleModal('galleria')} />}
            actionPosition={right}
            position="below"
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className={styles.modalBox} >
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {renderContent()}
          </Swiper>
        </Box>
      </Modal>
    </>
  );
};

export default ProjectList;
