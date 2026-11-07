# NHS England GLP-1 Prescription by IMD Decile

<table>
  <tr>
    <td><b>License</b></td>
    <td><code>MIT</code></td>
  </tr>
</table>

<table>
  <tr>
    <td><b>Python</b></td>
    <td><code>3.10+</code></td>
  </tr>
</table>

> [!WARNING]
> Raw datasets are omitted due to scale. To run this pipeline, download the official sources listed below into your local directory and execute.

### Summary
Deployed an optimised python pipeline to explore the disparities in GLP-1 prescriptions across socio-economic boundaries. 

### Project Breakdown

- 🧮 **Key Pipeline Metrics**:
  - Extracts the  total frequency of Liraglutide, Semagludite, and Tirzepatide prescription record counts across England.
  - Matches each GP to its primary patient catchment area to map prescription density to the Lower Layer Super Output Area (LSOA)
  - Correlates the geographic density clusters against national Income of Multiple Deprivation Deciles (1–10)

- 📂 **Data Sources:**
  - *Navigating Prescription Data:* Open and the official [NHSBSA October 2025 EPD Registry](https://opendata.nhsbsa.net/dataset/english-prescribing-dataset-epd-with-snomed-code/resource/d28455b2-7373-4d4a-8577-b28973ddba00).
  - *Reference Directories (GP, LSOA, & IMD Ranks):* Pre-loaded directly within the [/reference_data](https://github.com/ny262/NHS-Prescription-Deprivation-Analysis/tree/main/reference_data) directory of this repository for convenience (**gp_practice_lsoa_map.xlsx** and **lsoa_deprivation_index.xlsx**).

- 🌐 **Links:** [Analysis Results](https://ny262.github.io/NHS-Prescription-Deprivation-Analysis/) **|** [Main Portfolio Repository](https://github.com/ny262/ny262.github.io)
