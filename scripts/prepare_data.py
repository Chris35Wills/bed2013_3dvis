import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import georaster as geo

# xkcd plot style to make things light and whimsicle
plt.xkcd()

#set the path
dem2012_F="O:/Documents/CHRIS_Bristol/DEM_2012/RUUD_tif_proj_CORRECTED/bed_elev.tif"
#dem2012=geo.SingleBandRaster(dem2012_F)

# get some subsets
extent_aoi_1=(-739334, -391431, -1697806,-1335213) #NW
extent_aoi_2=(-651199, -312572, -2358050, -2136165) #jakobshavn
extent_aoi_3=(131198, 486833, -2580708, -2252906) #Kangerlussuq?
extent_aoi_4=(-155629, 135064, -2872174, -2557515) #Near helheim
dem2012_ext1=geo.SingleBandRaster(dem2012_F, extent_aoi_1, latlon=False)
dem2012_ext2=geo.SingleBandRaster(dem2012_F, extent_aoi_2, latlon=False)
dem2012_ext3=geo.SingleBandRaster(dem2012_F, extent_aoi_3, latlon=False)
dem2012_ext4=geo.SingleBandRaster(dem2012_F, extent_aoi_4, latlon=False)

#get arrays
dem12_aoi1=dem2012_ext1.r
dem12_aoi2=dem2012_ext2.r
dem12_aoi3=dem2012_ext3.r
dem12_aoi4=dem2012_ext4.r

## quick plot
plotting=False
if plotting:
	elev_min=min(np.nanmin(dem12_aoi1),np.nanmin(dem12_aoi2),np.nanmin(dem12_aoi3),np.nanmin(dem12_aoi4))
	elev_max=max(np.nanmax(dem12_aoi1),np.nanmax(dem12_aoi2),np.nanmax(dem12_aoi3),np.nanmax(dem12_aoi4))
	
	fig=plt.figure(figsize=(12,12))
	ax1=fig.add_subplot(221)
	ax2=fig.add_subplot(222)
	ax3=fig.add_subplot(223)
	ax4=fig.add_subplot(224)
	
	cmap=cm.RdBu_r # cm.bwr 
	cmap.set_bad('gray',1.)
	ax1.imshow(dem12_aoi1, extent=np.asarray(extent_aoi_1)/1000., cmap=cmap, clim=(elev_min, elev_max))
	ax2.imshow(dem12_aoi2, extent=np.asarray(extent_aoi_2)/1000., cmap=cmap, clim=(elev_min, elev_max))
	ax3.imshow(dem12_aoi3, extent=np.asarray(extent_aoi_3)/1000., cmap=cmap, clim=(elev_min, elev_max))
	ax4.imshow(dem12_aoi4, extent=np.asarray(extent_aoi_4)/1000., cmap=cmap, clim=(elev_min, elev_max))
	
	plt.tight_layout()
	plt.show()

#write arrays to csv

opath="C:/Github/bed2013_3dvis/data"
np.savetxt(("%s/aoi1.csv" %opath), dem12_aoi1, delimiter=",")
np.savetxt(("%s/aoi2.csv" %opath), dem12_aoi2, delimiter=",")
np.savetxt(("%s/aoi3.csv" %opath), dem12_aoi3, delimiter=",")
np.savetxt(("%s/aoi4.csv" %opath), dem12_aoi4, delimiter=",")